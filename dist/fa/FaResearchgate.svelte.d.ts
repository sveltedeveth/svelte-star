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
export type FaResearchgateProps = typeof __propDef.props;
export type FaResearchgateEvents = typeof __propDef.events;
export type FaResearchgateSlots = typeof __propDef.slots;
export default class FaResearchgate extends SvelteComponentTyped<FaResearchgateProps, FaResearchgateEvents, FaResearchgateSlots> {
}
export {};
