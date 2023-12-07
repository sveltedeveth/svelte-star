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
export type GiYinYangProps = typeof __propDef.props;
export type GiYinYangEvents = typeof __propDef.events;
export type GiYinYangSlots = typeof __propDef.slots;
export default class GiYinYang extends SvelteComponentTyped<GiYinYangProps, GiYinYangEvents, GiYinYangSlots> {
}
export {};
