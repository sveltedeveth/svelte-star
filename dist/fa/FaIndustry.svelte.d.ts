import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FaIndustryProps = typeof __propDef.props;
export type FaIndustryEvents = typeof __propDef.events;
export type FaIndustrySlots = typeof __propDef.slots;
export default class FaIndustry extends SvelteComponentTyped<FaIndustryProps, FaIndustryEvents, FaIndustrySlots> {
}
export {};
