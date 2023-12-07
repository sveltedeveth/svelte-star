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
export type FaRadiationProps = typeof __propDef.props;
export type FaRadiationEvents = typeof __propDef.events;
export type FaRadiationSlots = typeof __propDef.slots;
export default class FaRadiation extends SvelteComponentTyped<FaRadiationProps, FaRadiationEvents, FaRadiationSlots> {
}
export {};
