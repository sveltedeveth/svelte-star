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
export type GiEmberShotProps = typeof __propDef.props;
export type GiEmberShotEvents = typeof __propDef.events;
export type GiEmberShotSlots = typeof __propDef.slots;
export default class GiEmberShot extends SvelteComponentTyped<GiEmberShotProps, GiEmberShotEvents, GiEmberShotSlots> {
}
export {};
