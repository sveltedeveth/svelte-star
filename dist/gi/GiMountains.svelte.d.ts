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
export type GiMountainsProps = typeof __propDef.props;
export type GiMountainsEvents = typeof __propDef.events;
export type GiMountainsSlots = typeof __propDef.slots;
export default class GiMountains extends SvelteComponentTyped<GiMountainsProps, GiMountainsEvents, GiMountainsSlots> {
}
export {};
