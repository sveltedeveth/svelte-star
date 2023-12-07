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
export type GiBayonetProps = typeof __propDef.props;
export type GiBayonetEvents = typeof __propDef.events;
export type GiBayonetSlots = typeof __propDef.slots;
export default class GiBayonet extends SvelteComponentTyped<GiBayonetProps, GiBayonetEvents, GiBayonetSlots> {
}
export {};
