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
export type GiHeartNecklaceProps = typeof __propDef.props;
export type GiHeartNecklaceEvents = typeof __propDef.events;
export type GiHeartNecklaceSlots = typeof __propDef.slots;
export default class GiHeartNecklace extends SvelteComponentTyped<GiHeartNecklaceProps, GiHeartNecklaceEvents, GiHeartNecklaceSlots> {
}
export {};
