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
export type GiMugShotProps = typeof __propDef.props;
export type GiMugShotEvents = typeof __propDef.events;
export type GiMugShotSlots = typeof __propDef.slots;
export default class GiMugShot extends SvelteComponentTyped<GiMugShotProps, GiMugShotEvents, GiMugShotSlots> {
}
export {};
