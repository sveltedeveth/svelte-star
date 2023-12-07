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
export type GiMagnetProps = typeof __propDef.props;
export type GiMagnetEvents = typeof __propDef.events;
export type GiMagnetSlots = typeof __propDef.slots;
export default class GiMagnet extends SvelteComponentTyped<GiMagnetProps, GiMagnetEvents, GiMagnetSlots> {
}
export {};
