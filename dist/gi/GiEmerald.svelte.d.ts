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
export type GiEmeraldProps = typeof __propDef.props;
export type GiEmeraldEvents = typeof __propDef.events;
export type GiEmeraldSlots = typeof __propDef.slots;
export default class GiEmerald extends SvelteComponentTyped<GiEmeraldProps, GiEmeraldEvents, GiEmeraldSlots> {
}
export {};
