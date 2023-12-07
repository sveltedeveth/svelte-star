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
export type GiNunchakuProps = typeof __propDef.props;
export type GiNunchakuEvents = typeof __propDef.events;
export type GiNunchakuSlots = typeof __propDef.slots;
export default class GiNunchaku extends SvelteComponentTyped<GiNunchakuProps, GiNunchakuEvents, GiNunchakuSlots> {
}
export {};
