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
export type GiWallLightProps = typeof __propDef.props;
export type GiWallLightEvents = typeof __propDef.events;
export type GiWallLightSlots = typeof __propDef.slots;
export default class GiWallLight extends SvelteComponentTyped<GiWallLightProps, GiWallLightEvents, GiWallLightSlots> {
}
export {};
