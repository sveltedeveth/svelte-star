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
export type GiSunflowerProps = typeof __propDef.props;
export type GiSunflowerEvents = typeof __propDef.events;
export type GiSunflowerSlots = typeof __propDef.slots;
export default class GiSunflower extends SvelteComponentTyped<GiSunflowerProps, GiSunflowerEvents, GiSunflowerSlots> {
}
export {};
