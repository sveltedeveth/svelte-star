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
export type GiSteyrAugProps = typeof __propDef.props;
export type GiSteyrAugEvents = typeof __propDef.events;
export type GiSteyrAugSlots = typeof __propDef.slots;
export default class GiSteyrAug extends SvelteComponentTyped<GiSteyrAugProps, GiSteyrAugEvents, GiSteyrAugSlots> {
}
export {};
