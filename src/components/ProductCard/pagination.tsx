import { FunctionalComponent } from "preact";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: FunctionalComponent<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <nav
      className="self-center flex w-full justify-center gap-4 text-sm text-gray-600 font-normal mt-10"
      aria-label="Pagination"
    >
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-full border ${
          currentPage === 1
            ? "text-gray-300 border-gray-200 cursor-not-allowed line-through"
            : "hover:bg-gray-100 border-gray-300"
        }`}
      >
        Anterior
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        const isActive = page === currentPage;

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 rounded-full border ${
              isActive
                ? "bg-red-500 text-white"
                : "border-gray-300 hover:bg-gray-100"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-full border ${
          currentPage === totalPages
            ? "text-gray-300 border-gray-200 cursor-not-allowed line-through"
            : "hover:bg-gray-100 border-gray-300"
        }`}
      >
        Próximo
      </button>
    </nav>
  );
};
