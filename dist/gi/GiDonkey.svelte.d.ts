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
export type GiDonkeyProps = typeof __propDef.props;
export type GiDonkeyEvents = typeof __propDef.events;
export type GiDonkeySlots = typeof __propDef.slots;
export default class GiDonkey extends SvelteComponentTyped<GiDonkeyProps, GiDonkeyEvents, GiDonkeySlots> {
}
export {};
