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
export type GiMeshBallProps = typeof __propDef.props;
export type GiMeshBallEvents = typeof __propDef.events;
export type GiMeshBallSlots = typeof __propDef.slots;
export default class GiMeshBall extends SvelteComponentTyped<GiMeshBallProps, GiMeshBallEvents, GiMeshBallSlots> {
}
export {};
