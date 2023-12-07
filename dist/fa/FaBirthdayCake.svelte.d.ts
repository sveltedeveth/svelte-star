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
export type FaBirthdayCakeProps = typeof __propDef.props;
export type FaBirthdayCakeEvents = typeof __propDef.events;
export type FaBirthdayCakeSlots = typeof __propDef.slots;
export default class FaBirthdayCake extends SvelteComponentTyped<FaBirthdayCakeProps, FaBirthdayCakeEvents, FaBirthdayCakeSlots> {
}
export {};
