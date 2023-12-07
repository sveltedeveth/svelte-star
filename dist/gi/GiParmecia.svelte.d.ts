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
export type GiParmeciaProps = typeof __propDef.props;
export type GiParmeciaEvents = typeof __propDef.events;
export type GiParmeciaSlots = typeof __propDef.slots;
export default class GiParmecia extends SvelteComponentTyped<GiParmeciaProps, GiParmeciaEvents, GiParmeciaSlots> {
}
export {};
