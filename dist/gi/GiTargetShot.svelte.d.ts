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
export type GiTargetShotProps = typeof __propDef.props;
export type GiTargetShotEvents = typeof __propDef.events;
export type GiTargetShotSlots = typeof __propDef.slots;
export default class GiTargetShot extends SvelteComponentTyped<GiTargetShotProps, GiTargetShotEvents, GiTargetShotSlots> {
}
export {};
