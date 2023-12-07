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
export type GiHeartBeatsProps = typeof __propDef.props;
export type GiHeartBeatsEvents = typeof __propDef.events;
export type GiHeartBeatsSlots = typeof __propDef.slots;
export default class GiHeartBeats extends SvelteComponentTyped<GiHeartBeatsProps, GiHeartBeatsEvents, GiHeartBeatsSlots> {
}
export {};
