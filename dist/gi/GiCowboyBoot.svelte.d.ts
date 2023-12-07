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
export type GiCowboyBootProps = typeof __propDef.props;
export type GiCowboyBootEvents = typeof __propDef.events;
export type GiCowboyBootSlots = typeof __propDef.slots;
export default class GiCowboyBoot extends SvelteComponentTyped<GiCowboyBootProps, GiCowboyBootEvents, GiCowboyBootSlots> {
}
export {};
