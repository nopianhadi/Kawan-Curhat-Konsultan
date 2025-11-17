import React from 'react';

export const CardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg animate-pulse">
      <div className="flex items-start gap-4">
        <div className="w-20 h-20 bg-gray-200 rounded-lg skeleton"></div>
        <div className="flex-1">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-3 skeleton"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2 skeleton"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 skeleton"></div>
        </div>
      </div>
    </div>
  );
};

export const TestimonialSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg animate-pulse">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-gray-200 rounded-full skeleton"></div>
        <div className="flex-1">
          <div className="h-5 bg-gray-200 rounded w-1/2 mb-2 skeleton"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3 skeleton"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full skeleton"></div>
        <div className="h-4 bg-gray-200 rounded w-full skeleton"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 skeleton"></div>
      </div>
    </div>
  );
};

export const BlogSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
      <div className="h-48 bg-gray-200 skeleton"></div>
      <div className="p-6">
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-3 skeleton"></div>
        <div className="h-6 bg-gray-200 rounded w-full mb-3 skeleton"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-2 skeleton"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 skeleton"></div>
      </div>
    </div>
  );
};

export default { CardSkeleton, TestimonialSkeleton, BlogSkeleton };
