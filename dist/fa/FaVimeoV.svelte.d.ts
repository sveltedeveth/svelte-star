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
export type FaVimeoVProps = typeof __propDef.props;
export type FaVimeoVEvents = typeof __propDef.events;
export type FaVimeoVSlots = typeof __propDef.slots;
export default class FaVimeoV extends SvelteComponentTyped<FaVimeoVProps, FaVimeoVEvents, FaVimeoVSlots> {
}
export {};
