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
export type GiSummitsProps = typeof __propDef.props;
export type GiSummitsEvents = typeof __propDef.events;
export type GiSummitsSlots = typeof __propDef.slots;
export default class GiSummits extends SvelteComponentTyped<GiSummitsProps, GiSummitsEvents, GiSummitsSlots> {
}
export {};
