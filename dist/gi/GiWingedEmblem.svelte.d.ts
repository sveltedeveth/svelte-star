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
export type GiWingedEmblemProps = typeof __propDef.props;
export type GiWingedEmblemEvents = typeof __propDef.events;
export type GiWingedEmblemSlots = typeof __propDef.slots;
export default class GiWingedEmblem extends SvelteComponentTyped<GiWingedEmblemProps, GiWingedEmblemEvents, GiWingedEmblemSlots> {
}
export {};
