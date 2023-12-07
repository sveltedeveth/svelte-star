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
export type GiSixEyesProps = typeof __propDef.props;
export type GiSixEyesEvents = typeof __propDef.events;
export type GiSixEyesSlots = typeof __propDef.slots;
export default class GiSixEyes extends SvelteComponentTyped<GiSixEyesProps, GiSixEyesEvents, GiSixEyesSlots> {
}
export {};
