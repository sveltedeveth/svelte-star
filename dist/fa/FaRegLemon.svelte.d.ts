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
export type FaRegLemonProps = typeof __propDef.props;
export type FaRegLemonEvents = typeof __propDef.events;
export type FaRegLemonSlots = typeof __propDef.slots;
export default class FaRegLemon extends SvelteComponentTyped<FaRegLemonProps, FaRegLemonEvents, FaRegLemonSlots> {
}
export {};
