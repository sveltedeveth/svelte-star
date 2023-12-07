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
export type GiArrowDunkProps = typeof __propDef.props;
export type GiArrowDunkEvents = typeof __propDef.events;
export type GiArrowDunkSlots = typeof __propDef.slots;
export default class GiArrowDunk extends SvelteComponentTyped<GiArrowDunkProps, GiArrowDunkEvents, GiArrowDunkSlots> {
}
export {};
