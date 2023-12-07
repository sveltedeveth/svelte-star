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
export type GiRamProfileProps = typeof __propDef.props;
export type GiRamProfileEvents = typeof __propDef.events;
export type GiRamProfileSlots = typeof __propDef.slots;
export default class GiRamProfile extends SvelteComponentTyped<GiRamProfileProps, GiRamProfileEvents, GiRamProfileSlots> {
}
export {};
