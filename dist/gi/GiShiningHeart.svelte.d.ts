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
export type GiShiningHeartProps = typeof __propDef.props;
export type GiShiningHeartEvents = typeof __propDef.events;
export type GiShiningHeartSlots = typeof __propDef.slots;
export default class GiShiningHeart extends SvelteComponentTyped<GiShiningHeartProps, GiShiningHeartEvents, GiShiningHeartSlots> {
}
export {};
