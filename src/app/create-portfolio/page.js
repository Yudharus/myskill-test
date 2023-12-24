"use client"
import TopBar from "../components/molecules/TopBar.molecules";
import CardDataPortfolio from "../components/organisms/CardDataPortfolio.organisms";

export default function CreatePortfolio({ searchParams }) {


  return (
    <div className="bg-gray-9">
      <TopBar searchParams={searchParams.isEdit} />
      <div className="py-14 px-8 lg:py-16 lg:px-32 ">
        <CardDataPortfolio searchParams={searchParams.isEdit} />
      </div>
    </div>
  )
}
