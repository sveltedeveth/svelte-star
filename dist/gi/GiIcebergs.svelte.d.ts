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
export type GiIcebergsProps = typeof __propDef.props;
export type GiIcebergsEvents = typeof __propDef.events;
export type GiIcebergsSlots = typeof __propDef.slots;
export default class GiIcebergs extends SvelteComponentTyped<GiIcebergsProps, GiIcebergsEvents, GiIcebergsSlots> {
}
export {};
