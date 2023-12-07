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
export type GiSaberAndPistolProps = typeof __propDef.props;
export type GiSaberAndPistolEvents = typeof __propDef.events;
export type GiSaberAndPistolSlots = typeof __propDef.slots;
export default class GiSaberAndPistol extends SvelteComponentTyped<GiSaberAndPistolProps, GiSaberAndPistolEvents, GiSaberAndPistolSlots> {
}
export {};
