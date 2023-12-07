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
export type GiDeskLampProps = typeof __propDef.props;
export type GiDeskLampEvents = typeof __propDef.events;
export type GiDeskLampSlots = typeof __propDef.slots;
export default class GiDeskLamp extends SvelteComponentTyped<GiDeskLampProps, GiDeskLampEvents, GiDeskLampSlots> {
}
export {};
