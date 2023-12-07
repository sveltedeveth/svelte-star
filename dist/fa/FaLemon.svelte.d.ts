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
export type FaLemonProps = typeof __propDef.props;
export type FaLemonEvents = typeof __propDef.events;
export type FaLemonSlots = typeof __propDef.slots;
export default class FaLemon extends SvelteComponentTyped<FaLemonProps, FaLemonEvents, FaLemonSlots> {
}
export {};
