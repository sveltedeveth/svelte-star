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
export type MdLiveTvProps = typeof __propDef.props;
export type MdLiveTvEvents = typeof __propDef.events;
export type MdLiveTvSlots = typeof __propDef.slots;
export default class MdLiveTv extends SvelteComponentTyped<MdLiveTvProps, MdLiveTvEvents, MdLiveTvSlots> {
}
export {};
