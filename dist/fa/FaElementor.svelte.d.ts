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
export type FaElementorProps = typeof __propDef.props;
export type FaElementorEvents = typeof __propDef.events;
export type FaElementorSlots = typeof __propDef.slots;
export default class FaElementor extends SvelteComponentTyped<FaElementorProps, FaElementorEvents, FaElementorSlots> {
}
export {};
