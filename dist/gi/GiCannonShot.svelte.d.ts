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
export type GiCannonShotProps = typeof __propDef.props;
export type GiCannonShotEvents = typeof __propDef.events;
export type GiCannonShotSlots = typeof __propDef.slots;
export default class GiCannonShot extends SvelteComponentTyped<GiCannonShotProps, GiCannonShotEvents, GiCannonShotSlots> {
}
export {};
