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
export type GiKatanaProps = typeof __propDef.props;
export type GiKatanaEvents = typeof __propDef.events;
export type GiKatanaSlots = typeof __propDef.slots;
export default class GiKatana extends SvelteComponentTyped<GiKatanaProps, GiKatanaEvents, GiKatanaSlots> {
}
export {};
