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
export type GiShiningClawProps = typeof __propDef.props;
export type GiShiningClawEvents = typeof __propDef.events;
export type GiShiningClawSlots = typeof __propDef.slots;
export default class GiShiningClaw extends SvelteComponentTyped<GiShiningClawProps, GiShiningClawEvents, GiShiningClawSlots> {
}
export {};
