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
export type GiEvilEyesProps = typeof __propDef.props;
export type GiEvilEyesEvents = typeof __propDef.events;
export type GiEvilEyesSlots = typeof __propDef.slots;
export default class GiEvilEyes extends SvelteComponentTyped<GiEvilEyesProps, GiEvilEyesEvents, GiEvilEyesSlots> {
}
export {};
