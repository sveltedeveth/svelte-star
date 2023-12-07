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
export type GiDungeonLightProps = typeof __propDef.props;
export type GiDungeonLightEvents = typeof __propDef.events;
export type GiDungeonLightSlots = typeof __propDef.slots;
export default class GiDungeonLight extends SvelteComponentTyped<GiDungeonLightProps, GiDungeonLightEvents, GiDungeonLightSlots> {
}
export {};
