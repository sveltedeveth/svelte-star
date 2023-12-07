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
export type GiFriedEggsProps = typeof __propDef.props;
export type GiFriedEggsEvents = typeof __propDef.events;
export type GiFriedEggsSlots = typeof __propDef.slots;
export default class GiFriedEggs extends SvelteComponentTyped<GiFriedEggsProps, GiFriedEggsEvents, GiFriedEggsSlots> {
}
export {};
