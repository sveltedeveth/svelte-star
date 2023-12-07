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
export type GiScooterProps = typeof __propDef.props;
export type GiScooterEvents = typeof __propDef.events;
export type GiScooterSlots = typeof __propDef.slots;
export default class GiScooter extends SvelteComponentTyped<GiScooterProps, GiScooterEvents, GiScooterSlots> {
}
export {};
