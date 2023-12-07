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
export type GiPirateCaptainProps = typeof __propDef.props;
export type GiPirateCaptainEvents = typeof __propDef.events;
export type GiPirateCaptainSlots = typeof __propDef.slots;
export default class GiPirateCaptain extends SvelteComponentTyped<GiPirateCaptainProps, GiPirateCaptainEvents, GiPirateCaptainSlots> {
}
export {};
