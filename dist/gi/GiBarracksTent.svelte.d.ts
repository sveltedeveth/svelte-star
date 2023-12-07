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
export type GiBarracksTentProps = typeof __propDef.props;
export type GiBarracksTentEvents = typeof __propDef.events;
export type GiBarracksTentSlots = typeof __propDef.slots;
export default class GiBarracksTent extends SvelteComponentTyped<GiBarracksTentProps, GiBarracksTentEvents, GiBarracksTentSlots> {
}
export {};
