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
export type DiBowerProps = typeof __propDef.props;
export type DiBowerEvents = typeof __propDef.events;
export type DiBowerSlots = typeof __propDef.slots;
export default class DiBower extends SvelteComponentTyped<DiBowerProps, DiBowerEvents, DiBowerSlots> {
}
export {};
