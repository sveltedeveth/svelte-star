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
export type GiMedalSkullProps = typeof __propDef.props;
export type GiMedalSkullEvents = typeof __propDef.events;
export type GiMedalSkullSlots = typeof __propDef.slots;
export default class GiMedalSkull extends SvelteComponentTyped<GiMedalSkullProps, GiMedalSkullEvents, GiMedalSkullSlots> {
}
export {};
