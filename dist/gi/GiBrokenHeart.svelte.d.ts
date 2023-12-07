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
export type GiBrokenHeartProps = typeof __propDef.props;
export type GiBrokenHeartEvents = typeof __propDef.events;
export type GiBrokenHeartSlots = typeof __propDef.slots;
export default class GiBrokenHeart extends SvelteComponentTyped<GiBrokenHeartProps, GiBrokenHeartEvents, GiBrokenHeartSlots> {
}
export {};
