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
export type GiWatchtowerProps = typeof __propDef.props;
export type GiWatchtowerEvents = typeof __propDef.events;
export type GiWatchtowerSlots = typeof __propDef.slots;
export default class GiWatchtower extends SvelteComponentTyped<GiWatchtowerProps, GiWatchtowerEvents, GiWatchtowerSlots> {
}
export {};
