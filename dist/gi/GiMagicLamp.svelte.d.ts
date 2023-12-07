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
export type GiMagicLampProps = typeof __propDef.props;
export type GiMagicLampEvents = typeof __propDef.events;
export type GiMagicLampSlots = typeof __propDef.slots;
export default class GiMagicLamp extends SvelteComponentTyped<GiMagicLampProps, GiMagicLampEvents, GiMagicLampSlots> {
}
export {};
