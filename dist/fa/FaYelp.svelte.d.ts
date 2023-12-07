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
export type FaYelpProps = typeof __propDef.props;
export type FaYelpEvents = typeof __propDef.events;
export type FaYelpSlots = typeof __propDef.slots;
export default class FaYelp extends SvelteComponentTyped<FaYelpProps, FaYelpEvents, FaYelpSlots> {
}
export {};
